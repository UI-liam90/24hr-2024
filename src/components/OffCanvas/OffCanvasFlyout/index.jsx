import { useStore } from "@nanostores/react";
import { isNavOpen } from "../offCanvasStore";
import Menu from "~components/Menu";
import { getMenu } from "~data/menu";
import "./style.scss";

const menu = await getMenu();

const OffCanvasFlyout = () => {
    const $isNavOpen = useStore(isNavOpen);
    return (
        <nav id="off-canvas-menu" className={`off-canvas off-canvas--${$isNavOpen ? "open" : "closed"}`}>
            <div className="off-canvas__inner">
                <button className="off-canvas__close" aria-label="Close Menu" onClick={() => isNavOpen.set(!$isNavOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path>
                    </svg>
                </button>
            </div>
            <Menu className="offcanvas-menu" menuData={menu.menuItems} />
        </nav>
    );
};

export default OffCanvasFlyout;
