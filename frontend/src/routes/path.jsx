const ROOT_DASHBOARD = "/";

function path(root, subpath) {
    return `${root}${subpath}`;
}

export const PATH_DASHBOARD = {
    root: ROOT_DASHBOARD,
    general: {
        app: path(ROOT_DASHBOARD, "app"),
    }
}