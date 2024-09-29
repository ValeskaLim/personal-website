import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <div className="px-0 w-full min-h-screen lg:px-[10rem]">
            {children}
        </div>
    );
}

export default Container;