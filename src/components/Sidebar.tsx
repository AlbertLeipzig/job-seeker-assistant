interface ISidebarProps{
    children : React.ReactNode
}
export const Sidebar = ({children} : ISidebarProps) => {
    return(
        <aside>
            <h2>Project Title</h2>
            {children}
        </aside>
    )
}