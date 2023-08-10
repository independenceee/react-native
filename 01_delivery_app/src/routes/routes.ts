import configs from "../configs";

import Home from "../screens/Home/Home";

type Routes = {
    path: string;
    component: () => React.JSX.Element;
};
const publicRoutes = [{ path: configs.routes.home, conponent: Home }];

const privateRoutes: any = [];

export { privateRoutes, publicRoutes };
