import Bell from "@/app/_component/svg/bellIcon";

export default function Header() {
    return (
        <div className={'flex p-6'}>
            <div className={'grow'}>
                <p className={'text-2xl'}>
                    Cushy
                </p>
            </div>
            <div className={'flex justify-center items-center'}>
                <Bell/>
            </div>
        </div>
    )
}