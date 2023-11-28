import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import './App.css';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}-theme`}>
            <div className="header">
                <h1>How Does a Toggle Switch Work?</h1>
                <ThemeToggle />
            </div>
            <div className="text-wrap">
                <p>Although available in different designs and configurations, the fundamental toggle switch design is as follows.
                    An armature (component carrying electrical current) attached to the toggle moves when this is pulled, placing an electrical contact
                    into a circuit or removing it, thereby activating or deactivating the circuit. The switch will normally remain
                    in position until manually moved once more, although momentary switches also include an attached spring which will pull
                    the actuator back to its starting point once released.</p>
            </div>

        </div>
    );
};

export default App;
