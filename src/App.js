import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [searchField, setSearchField] = useState(''); //intial value(an empty string)
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredmonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredmonsters(newFilterMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                className="monsters-search-box"
                onChangeHandler={onSearchChange}
                placeholder={'search monsters'}
            />

            <CardList monsters={filteredMonsters} />
        </div>
    );
};

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             searchField: '',
//         };
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((users) =>
//                 this.setState(() => {
//                     return { monsters: users };
//                 })
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };

//     render() {
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filterMonsters = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField);
//         });
//         return (
//             <div className="App">
//                 <h1 className="app-title">Monsters Rolodex</h1>
//                 <SearchBox
//                     className="monsters-search-box"
//                     onChangeHandler={onSearchChange}
//                     placeholder={'search monsters'}
//                 />
//                 <CardList monsters={filterMonsters} />
//             </div>
//         );
//     }
// }

export default App;
