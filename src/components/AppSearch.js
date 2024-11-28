import './AppSearch.css';
function AppSearch(props){
    const { value , onValueChange} = props;
    return(
        <div className="App-search">
        <input
          className="App-search-input"
          type="text"
          placeholder="Search Method"
          value={value}
          onChange={(event) => {onValueChange(event.target.value)}}
        />
        
      </div>
    );
}
export default AppSearch;