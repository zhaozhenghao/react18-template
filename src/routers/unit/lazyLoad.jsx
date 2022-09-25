import React, {Suspense} from "react";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp) => {
    return (
        <Suspense>
            <Comp/>
        </Suspense>
    );
};

export default lazyLoad;
