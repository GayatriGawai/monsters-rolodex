import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
        console.log('1 constructor');
    }
    componentDidMount() {
        console.log('3 componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        console.log(this.state);
                    }
                )
            );
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return { searchField };
        });
    };

    render() {
        console.log('2 render');

        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });
        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search monster"
                    onChange={this.onSearchChange}
                />
                {filterMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;