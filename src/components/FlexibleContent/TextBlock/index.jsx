import { HTMLRender } from "@components/helpers/htmlRender";

import styles from "./style.module.scss";

const TextBlock = ({ blockData }) => {
    return (
        <>
            <div className={styles.textBlock}>
                <div className="container">
                    <HTMLRender data={blockData.wysiwyg} />
                </div>
            </div>
        </>
    );
};

export default TextBlock;
