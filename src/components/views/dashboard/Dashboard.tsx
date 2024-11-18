import LayoutDB from "./layout/LayoutDB";

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <LayoutDB>
            <p>hola</p>
        </LayoutDB>
    );
}

export default Dashboard;