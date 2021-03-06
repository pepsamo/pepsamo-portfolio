import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.debug(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <h1> Qualcosa è andato storto </h1>
        }

        return children;
    }
    
}