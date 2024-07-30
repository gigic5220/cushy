import {SvgIconProps} from "@/types/common";
import CalendarIcon from "@/app/_component/svg/calendarIcon";
import BellIcon from "@/app/_component/svg/bellIcon";
import SettingIcon from "@/app/_component/svg/settingIcon";

export default function SvgIcon({ name, color } : SvgIconProps) {
    switch (name) {
        case 'bell' :
            return BellIcon(color);
        case 'calendar':
            return CalendarIcon(color);
        case 'setting':
            return SettingIcon(color);
    }
}