import gettoken from '@/lib/gettoken';
import { redirect } from 'next/navigation';

export default function isAuthenticated(Component: any) {
    return async function IsAuth(props: any) {
        const token = await gettoken();

        if (!token) {
            redirect('/login');
        } else {
            return <Component {...props} />;
        }
    };
}