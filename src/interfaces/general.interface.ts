export interface IAppProps {
    actualSection: string;
}

export interface IStore {
    section: IAppProps;
}

export interface IPropsHeader {
    changeSection: (action: string) => any;
};