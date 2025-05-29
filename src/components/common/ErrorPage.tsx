const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-[100dvh] bg-gray-50">
            <div className="text-center space-y-4 px-4">
                <h1 className="text-2xl font-bold text-gray-900">Oops! Something went wrong</h1>
                <p className="text-gray-600 max-w-md">
                    We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                </p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;