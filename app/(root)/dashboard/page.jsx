import AddFormSection from './add-form';

const PageDashboard = () => {
    return (
        <div className="container  mx-auto p-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">Welcome to the dashboard!</p>
        <AddFormSection />
        </div>
    );  
}

export default PageDashboard;