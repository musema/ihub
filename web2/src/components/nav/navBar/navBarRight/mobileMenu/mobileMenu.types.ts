
export interface IMobileMenuProps {
    moreMenuAnchorEl: Element | ((element: Element) => Element) | null | undefined;
    menuId: string;
    isOpen: boolean;
    onMobileMenuClose: () => void;
    onProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}