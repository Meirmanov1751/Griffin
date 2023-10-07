import React, { useState } from 'react';
import axios from 'axios';
import instance from "../../store/api";

const CommandConsole = () => {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const executeCommand = async () => {
        if (!command) return;

        setLoading(true);
        try {
            const response = await instance.get('cmd_kali/?command='+command );
            setOutput(response.data.message);
        } catch (error) {
            setOutput(error.response.data.error);
        }

        setLoading(false);
    };

    return (
        <div className="console">
            <div className="console-input">
                <input
                    type="text"
                    placeholder="Enter command..."
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    disabled={loading}
                />
                <button onClick={executeCommand} disabled={loading}>
                    Execute
                </button>
            </div>
            <div className="console-output">
                <pre>{output}</pre>
            </div>
            <style jsx>{`
        .console {
          height: 90vh;
          background-color: #222;
          color: #fff;
          padding: 10px;
          margin: 0 50px;
          border-radius: 5px;
        }

        .console-input {
          display: flex;
          align-items: start;
          margin-bottom: 10px;
        }

        .console-input input {
          flex: 1;
          padding: 5px;
          margin-right: 10px;
          border: none;
          background-color: #333;
          color: #fff;
        }

        .console-input button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }

        .console-input button:disabled {
          background-color: #777;
          cursor: not-allowed;
        }

        .console-output {
          text-align: start;
          background-color: #333;
          padding: 10px;
          border-radius: 5px;
        }

        .console-output pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
        </div>
    );
};

export default CommandConsole;
