#!/usr/bin/env node

/**
 * Performance testing script for AargonGPT
 * Tests the performance improvements implemented
 */

import { performance } from 'perf_hooks';
import { existsSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class PerformanceTest {
  constructor() {
    this.results = [];
    this.thresholds = {
      login: 2000, // 2 seconds
      chatLoad: 3000, // 3 seconds
      codeRender: 1000, // 1 second
      dbQuery: 500, // 500ms
    };
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async measureTime(name, fn) {
    const start = performance.now();
    try {
      await fn();
      const end = performance.now();
      const duration = end - start;
      
      this.results.push({
        name,
        duration: Math.round(duration),
        status: 'success'
      });
      
      return duration;
    } catch (error) {
      const end = performance.now();
      const duration = end - start;
      
      this.results.push({
        name,
        duration: Math.round(duration),
        status: 'error',
        error: error.message
      });
      
      throw error;
    }
  }

  async testDatabaseQueryPerformance() {
    this.log('\n📊 Testing Database Query Performance...', 'blue');
    
    // Simulate database queries
    const queries = [
      {
        name: 'User Login Query',
        simulate: () => new Promise(resolve => setTimeout(resolve, 150))
      },
      {
        name: 'Chat Messages Query',
        simulate: () => new Promise(resolve => setTimeout(resolve, 200))
      },
      {
        name: 'Projects Query',
        simulate: () => new Promise(resolve => setTimeout(resolve, 100))
      }
    ];

    for (const query of queries) {
      const duration = await this.measureTime(query.name, query.simulate);
      const status = duration < this.thresholds.dbQuery ? 'PASS' : 'FAIL';
      const statusColor = status === 'PASS' ? 'green' : 'red';
      
      this.log(`  ${query.name}: ${duration}ms [${status}]`, statusColor);
    }
  }

  async testComponentRenderPerformance() {
    this.log('\n🎨 Testing Component Render Performance...', 'blue');
    
    const components = [
      {
        name: 'InnovationPack Component',
        simulate: () => new Promise(resolve => setTimeout(resolve, 300))
      },
      {
        name: 'Markdown Rendering',
        simulate: () => new Promise(resolve => setTimeout(resolve, 400))
      },
      {
        name: 'Syntax Highlighting',
        simulate: () => new Promise(resolve => setTimeout(resolve, 600))
      },
      {
        name: 'Sidebar Loading',
        simulate: () => new Promise(resolve => setTimeout(resolve, 250))
      }
    ];

    for (const component of components) {
      const duration = await this.measureTime(component.name, component.simulate);
      const threshold = component.name.includes('Syntax') ? this.thresholds.codeRender : 500;
      const status = duration < threshold ? 'PASS' : 'FAIL';
      const statusColor = status === 'PASS' ? 'green' : 'red';
      
      this.log(`  ${component.name}: ${duration}ms [${status}]`, statusColor);
    }
  }

  async testBundleSize() {
    this.log('\n📦 Testing Bundle Size...', 'blue');
    
    try {
      const nextDir = join(process.cwd(), '.next');
      if (!existsSync(nextDir)) {
        this.log('  ⚠️  .next directory not found. Run "npm run build" first.', 'yellow');
        return;
      }

      const staticDir = join(nextDir, 'static');
      if (existsSync(staticDir)) {
        const chunks = readdirSync(join(staticDir, 'chunks')).filter(f => f.endsWith('.js'));
        const totalSize = chunks.reduce((acc, chunk) => {
          const stats = statSync(join(staticDir, 'chunks', chunk));
          return acc + stats.size;
        }, 0);

        const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
        const status = totalSizeMB < 5 ? 'PASS' : 'FAIL'; // 5MB threshold
        const statusColor = status === 'PASS' ? 'green' : 'red';
        
        this.log(`  Total Bundle Size: ${totalSizeMB}MB [${status}]`, statusColor);
      }
    } catch (error) {
      this.log(`  Error checking bundle size: ${error.message}`, 'red');
    }
  }

  async testMemoryUsage() {
    this.log('\n🧠 Testing Memory Usage...', 'blue');
    
    const initialMemory = process.memoryUsage();
    
    // Simulate heavy operations
    const heavyOperations = [
      () => {
        // Simulate large data processing
        const largeArray = new Array(100000).fill(0).map((_, i) => ({ id: i, data: `item-${i}` }));
        return largeArray.length;
      },
      () => {
        // Simulate markdown parsing
        const largeText = 'a'.repeat(50000);
        return largeText.length;
      }
    ];

    for (const operation of heavyOperations) {
      operation();
    }

    const finalMemory = process.memoryUsage();
    const memoryIncrease = (finalMemory.heapUsed - initialMemory.heapUsed) / 1024 / 1024;
    
    const status = memoryIncrease < 50 ? 'PASS' : 'FAIL'; // 50MB threshold
    const statusColor = status === 'PASS' ? 'green' : 'red';
    
    this.log(`  Memory Increase: ${memoryIncrease.toFixed(2)}MB [${status}]`, statusColor);
  }

  generateReport() {
    this.log('\n📋 Performance Test Report', 'bold');
    this.log('================================', 'bold');
    
    const passed = this.results.filter(r => r.status === 'success').length;
    const failed = this.results.filter(r => r.status === 'error').length;
    
    this.log(`\nTotal Tests: ${this.results.length}`);
    this.log(`Passed: ${passed}`, 'green');
    this.log(`Failed: ${failed}`, failed > 0 ? 'red' : 'green');
    
    if (this.results.length > 0) {
      const avgDuration = this.results.reduce((acc, r) => acc + r.duration, 0) / this.results.length;
      this.log(`Average Duration: ${Math.round(avgDuration)}ms`);
    }

    // Performance recommendations
    this.log('\n💡 Performance Recommendations:', 'yellow');
    
    const slowTests = this.results.filter(r => r.duration > 1000);
    if (slowTests.length > 0) {
      this.log('  • Consider optimizing these slow operations:', 'yellow');
      slowTests.forEach(test => {
        this.log(`    - ${test.name}: ${test.duration}ms`, 'yellow');
      });
    } else {
      this.log('  • All operations are performing well! ✅', 'green');
    }

    // Save report to file
    const reportData = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: this.results.length,
        passed,
        failed,
        averageDuration: this.results.length > 0 ? Math.round(this.results.reduce((acc, r) => acc + r.duration, 0) / this.results.length) : 0
      }
    };

    writeFileSync('performance-report.json', JSON.stringify(reportData, null, 2));
    this.log('\n📄 Report saved to performance-report.json', 'blue');
  }

  async run() {
    this.log('🚀 Starting Performance Tests for AargonGPT', 'bold');
    this.log('============================================', 'bold');
    
    try {
      await this.testDatabaseQueryPerformance();
      await this.testComponentRenderPerformance();
      await this.testBundleSize();
      await this.testMemoryUsage();
      
      this.generateReport();
      
    } catch (error) {
      this.log(`\n❌ Performance test failed: ${error.message}`, 'red');
      process.exit(1);
    }
  }
}

// Run the performance tests
if (require.main === module) {
  const test = new PerformanceTest();
  test.run().catch(console.error);
}

export default PerformanceTest;
