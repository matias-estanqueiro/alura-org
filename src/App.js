// React hook : const [varName, setVarName] = useState(InicialValueState);
import { useState } from 'react';

import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ShowForm from './components/ShowForm/ShowForm';
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

import { v4 as uuidv4 } from 'uuid';

// Different ways to call components in react
// Component()
// <Component></Component>
// <Component />

function App() {
    // useState
    const [showForm, setShowForm] = useState(true);
    const [collaborators, setCollaborators] = useState([
        {
            id: uuidv4(),
            nameValue: "Matias",
            positionValue: "Junior Developer",
            pictureValue: "https://github.com/matias-estanqueiro.png",
            teamValue: "Development",
            favValue: true
        },
        {
            id: uuidv4(),
            nameValue: "Christian Velazco",
            positionValue: "Head e Instructor",
            pictureValue: "https://github.com/christianpva.png",
            teamValue: "FrontEnd",
            favValue: false
        },
        {
            id: uuidv4(),
            nameValue: "Jeanmarie Quijada",
            positionValue: "Instructora",
            pictureValue: "https://github.com/JeanmarieAluraLatam.png",
            teamValue: "Innovation and Management",
            favValue: false
        },
        {
            id: uuidv4(),
            nameValue: "Harland Lohora",
            positionValue: "Instructor",
            pictureValue: "https://github.com/harlandlohora.png",
            teamValue: "DevOps",
            favValue: false
        },
        {
            id: uuidv4(),
            nameValue: "Jose Gonzalez",
            positionValue: "FullStack Developer",
            pictureValue: "https://github.com/JoseDarioGonzalezCha.png",
            teamValue: "Development",
            favValue: false
        }
    ]);
    const [teams, setTeams] = useState([ 
        {id: uuidv4(), title: "Development", primaryColor: "#57C278"},
        {id: uuidv4(), title: "FrontEnd", primaryColor: "#82CFFA"},
        {id: uuidv4(), title: "Data Science", primaryColor: "#A6D157"},
        {id: uuidv4(), title: "DevOps", primaryColor: "#E06B69"},
        {id: uuidv4(), title: "UX/UI", primaryColor: "#DB6EBF"},
        {id: uuidv4(), title: "Mobile", primaryColor: "#FFBA05"},
        {id: uuidv4(), title: "Innovation and Management", primaryColor: "#FF8A29"} 
    ]);
    
    const updateShowForm = () => {
        setShowForm(!showForm);
    };

    const registerCollaborator = (collaborator) => {
        //spread operator: takes what exists in the array (...) and adds the new data
        setCollaborators([...collaborators, collaborator]);
    };

    const registerTeam = (newTeam) => {
        setTeams([...teams, {...newTeam, id: uuidv4()}])
    };

    const deleteCollaborator = (id) => {
        //console.log(id);
        const delCollaborator = collaborators.filter((collaborator) => collaborator.id !== id);
        //console.log(delCollaborator);
        setCollaborators(delCollaborator);
    };

    const updateTeamColor = (teamColor, id) => {
        const newTeamColor = teams.map((team) => {
            if (team.id === id) { team.primaryColor = teamColor };
            return team;
        });
        setTeams(newTeamColor);
    };

    const likeCollaborator = (id) => {
        const changeLikeCollaborator = collaborators.map((collaborator) => {
            if (collaborator.id === id) { collaborator.favValue = !collaborator.favValue };
            return collaborator;
        });
        setCollaborators(changeLikeCollaborator);
    }

    return (
        <div>
            <Header />
            {/* conditional operator (ternaty) */}
            {/* showForm === true ? <Form /> : <div></div> */}
            {/* {showForm ? <Form /> : <></>} */}
            {showForm && <Form teams={teams.map((team) => team.title)} registerCollaborator={registerCollaborator} registerTeam={registerTeam} />}
            {/* I pass the function as props */}
            <ShowForm updateShowForm={ updateShowForm } />
            
            {
                // teams.map((team, index) => {
                // Whenever we use .map we must assign the key property (unique and unrepeatable value)
                //     return <Team key={team.title} title={team.title} />
                // })
                teams.map((team) => <Team key={team.title} data={team} collaborators={collaborators.filter(collaborator => collaborator.teamValue === team.title)} deleteCollaborator={deleteCollaborator} updateTeamColor={updateTeamColor} likeCollaborator={likeCollaborator} />)
            }
            <Footer />
        </div>
    );
};

export default App;

// FLOW ShowForm:
// 1- Whether or not we show the form through a condition
// 2- The ShowForm component will communicate with App to change the state (through props)
// 3- Through App and the updateShowForm function, React reacts to the change and shows or does not show the form

// FLOW collaborator:
// 1- the data is loaded into the form
// 2- this data is sent to the App (parent application)
// 3- In the app, a status is saved with all the collaborators that are entered
// 4- Finally this information must be sent to the collaborator component, in order to generate the cards