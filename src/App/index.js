import React from 'react';
import "./style.css";
 
const LIST = [
  {
    id: '1',
    title: 'The Road to React',
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
  },
];
 
const App = () => {
  const [list, setList] = React.useState([]);
 
  const handleFetch = () => {
    setList(LIST);
  };
 
  if (!list.length) {
    return (
      <div>
        <button type="button" onClick={handleFetch}>
          Fetch
        </button>
      </div>
    );
  }
 
  return (
    <div>
      <List list={list} />
    </div>
  );
};
 
const Item = ({ item }) => {
  return (
    <li key={item.id}>
      <span>{item.title}</span>
    </li>
  );
};

const List = ({ list }) => {
  const [selectedId, setSelectedId] = React.useState(list[0].id);
 
  return (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
          selectedId={selectedId}
          onSelectedId={setSelectedId}
        />
      ))}
    </ul>
  );

};
 
export default App;