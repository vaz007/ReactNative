import {NavigationActions} from 'react-navigation'


let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}


// Look at documentation of Navigation actions

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}