'use client';

import {usePathname, useRouter} from "next/navigation";
import SvgIcon from "@/app/_component/svg/SvgIcon";
import {MainMenu} from "@/types/common";
import {MAIN_MENU_LIST} from "@/app/_const/data";

type HandleClickNavigationButtonProps = {
    url: string;
}

export default function NavigationBar() {

    const router = useRouter();

    const currentPathname = usePathname();

    const handleClickNavigationItem = ({ url } : HandleClickNavigationButtonProps) => {
        router.push(url);
    }

    return (
        <div className={'fixed bottom-0 left-0 grid grid-cols-2 w-screen h-16'}>
            {
                ...MAIN_MENU_LIST.map((mainMenu: MainMenu) => {
                    return NavigationItem(
                        mainMenu,
                        handleClickNavigationItem,
                        currentPathname == `/${mainMenu.key}`
                    );
                })
            }
        </div>
    )
}

const NavigationItem = (
    mainMenu : MainMenu,
    handleClickNavigationItem : any,
    isActive : boolean
) => {
    return (
        <div
            key={mainMenu.key}
            className={'flex justify-center items-center'}
            onClick={() => handleClickNavigationItem({url: `/${mainMenu.key}`})}
        >
            <div className={'flex flex-col justify-center items-center'}>
                <SvgIcon
                    name={mainMenu.key}
                    color={isActive ? '#5fb9fa' : null}
                />
                <p className={isActive ? 'text-primary-blue' : ''}>{mainMenu.value}</p>
            </div>
        </div>
    );
}