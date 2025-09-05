#!/usr/bin/env node

/**
 * Comprehensive test runner for AargonGPT
 * Runs all tests and generates a complete report
 */

import { spawn } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import path from 'path';

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class TestRunner {
  constructor() {
    this.results = {
      unit: { status: 'pending', duration: 0, coverage: 0 },
      integration: { status: 'pending', duration: 0 },
      performance: { status: 'pending', duration: 0 },
      e2e: { status: 'pending', duration: 0 }
    };
    this.startTime = Date.now();
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        const duration = Date.now() - startTime;
        resolve({
          code,
          stdout,
          stderr,
          duration,
          success: code === 0
        });
      });

      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  async runUnitTests() {
    this.log('\n🧪 Running Unit Tests...', 'blue');
    this.log('========================', 'blue');
    
    try {
      const result = await this.runCommand('npm', ['run', 'test', '--', '--coverage', '--watchAll=false']);
      
      this.results.unit.duration = result.duration;
      this.results.unit.status = result.success ? 'passed' : 'failed';
      
      // Extract coverage from output
      const coverageMatch = result.stdout.match(/All files[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*(\d+\.?\d*)/);
      if (coverageMatch) {
        this.results.unit.coverage = parseFloat(coverageMatch[1]);
      }
      
      if (result.success) {
        this.log('✅ Unit tests passed!', 'green');
        this.log(`   Duration: ${(result.duration / 1000).toFixed(2)}s`, 'cyan');
        this.log(`   Coverage: ${this.results.unit.coverage}%`, 'cyan');
      } else {
        this.log('❌ Unit tests failed!', 'red');
        this.log(result.stderr, 'red');
      }
      
      return result.success;
    } catch (error) {
      this.log(`❌ Unit tests error: ${error.message}`, 'red');
      this.results.unit.status = 'error';
      return false;
    }
  }

  async runPerformanceTests() {
    this.log('\n⚡ Running Performance Tests...', 'yellow');
    this.log('===============================', 'yellow');
    
    try {
      const result = await this.runCommand('node', ['scripts/performance-test.js']);
      
      this.results.performance.duration = result.duration;
      this.results.performance.status = result.success ? 'passed' : 'failed';
      
      if (result.success) {
        this.log('✅ Performance tests passed!', 'green');
        this.log(`   Duration: ${(result.duration / 1000).toFixed(2)}s`, 'cyan');
      } else {
        this.log('❌ Performance tests failed!', 'red');
        this.log(result.stderr, 'red');
      }
      
      // Display performance test output
      this.log(result.stdout);
      
      return result.success;
    } catch (error) {
      this.log(`❌ Performance tests error: ${error.message}`, 'red');
      this.results.performance.status = 'error';
      return false;
    }
  }

  async runE2ETests() {
    this.log('\n🎭 Running E2E Tests...', 'magenta');
    this.log('=======================', 'magenta');
    
    try {
      // Check if the development server is running
      this.log('🚀 Starting development server...', 'cyan');
      
      const result = await this.runCommand('npx', ['playwright', 'test', '--reporter=line']);
      
      this.results.e2e.duration = result.duration;
      this.results.e2e.status = result.success ? 'passed' : 'failed';
      
      if (result.success) {
        this.log('✅ E2E tests passed!', 'green');
        this.log(`   Duration: ${(result.duration / 1000).toFixed(2)}s`, 'cyan');
      } else {
        this.log('❌ E2E tests failed!', 'red');
        this.log(result.stderr, 'red');
      }
      
      return result.success;
    } catch (error) {
      this.log(`❌ E2E tests error: ${error.message}`, 'red');
      this.results.e2e.status = 'error';
      return false;
    }
  }

  async checkPrerequisites() {
    this.log('🔍 Checking Prerequisites...', 'cyan');
    
    // Check if node_modules exists
    if (!existsSync('node_modules')) {
      this.log('❌ node_modules not found. Run "npm install" first.', 'red');
      return false;
    }
    
    // Check if .env file exists
    if (!existsSync('.env') && !existsSync('.env.local')) {
      this.log('⚠️  No .env file found. Some tests may fail.', 'yellow');
    }
    
    // Check if database is accessible
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      await prisma.$connect();
      await prisma.$disconnect();
      this.log('✅ Database connection successful', 'green');
    } catch (error) {
      this.log('⚠️  Database connection failed. Some tests may fail.', 'yellow');
    }
    
    return true;
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 Test Results Summary', 'bold');
    this.log('========================', 'bold');
    
    const testTypes = [
      { name: 'Unit Tests', key: 'unit', icon: '🧪' },
      { name: 'Performance Tests', key: 'performance', icon: '⚡' },
      { name: 'E2E Tests', key: 'e2e', icon: '🎭' }
    ];
    
    let allPassed = true;
    
    testTypes.forEach(({ name, key, icon }) => {
      const result = this.results[key];
      const status = result.status;
      const statusColor = status === 'passed' ? 'green' : status === 'failed' ? 'red' : 'yellow';
      const statusIcon = status === 'passed' ? '✅' : status === 'failed' ? '❌' : '⚠️';
      
      this.log(`${icon} ${name}: ${statusIcon} ${status.toUpperCase()}`, statusColor);
      this.log(`   Duration: ${(result.duration / 1000).toFixed(2)}s`, 'cyan');
      
      if (key === 'unit' && result.coverage) {
        this.log(`   Coverage: ${result.coverage}%`, 'cyan');
      }
      
      if (status !== 'passed') {
        allPassed = false;
      }
    });
    
    this.log(`\n⏱️  Total Duration: ${(totalDuration / 1000).toFixed(2)}s`, 'cyan');
    
    if (allPassed) {
      this.log('\n🎉 All tests passed! Your application is ready for deployment.', 'green');
    } else {
      this.log('\n⚠️  Some tests failed. Please review the results above.', 'yellow');
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      results: this.results,
      summary: {
        allPassed,
        totalTests: Object.keys(this.results).length,
        passedTests: Object.values(this.results).filter(r => r.status === 'passed').length
      }
    };
    
    writeFileSync('test-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Detailed report saved to test-report.json', 'blue');
    
    return allPassed;
  }

  async run() {
    this.log('🚀 AargonGPT Test Suite', 'bold');
    this.log('=======================', 'bold');
    
    // Check prerequisites
    const prereqsPassed = await this.checkPrerequisites();
    if (!prereqsPassed) {
      process.exit(1);
    }
    
    // Run all test suites
    const unitPassed = await this.runUnitTests();
    const perfPassed = await this.runPerformanceTests();
    const e2ePassed = await this.runE2ETests();
    
    // Generate final report
    const allPassed = this.generateReport();
    
    // Exit with appropriate code
    process.exit(allPassed ? 0 : 1);
  }
}

// Run the test suite
if (require.main === module) {
  const runner = new TestRunner();
  runner.run().catch(console.error);
}

export default TestRunner;
