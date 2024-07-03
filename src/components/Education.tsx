import React from 'react';

const Education: React.FC = () => {
    return (
        <div id="educationblock">
            <p className="title">Education</p>
            <table id="education">
                <tr>
                    <td className="years">
                        <p id="inno">2023-2027</p>
                    </td>
                    <td>
                        <p className="worktitle">Innopolis University, Russia.</p><p>Bachelor: Information Systems Engineering.</p>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Education;