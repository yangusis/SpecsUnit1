const Square = (props) => {
  const clickHandler = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };

  return (
    <div className="square" onClick={clickHandler}>
      {console.log(props.squares, props.player)}
      {props.squareValue === "O" ? "O" : props.squareValue}
    </div>
  );
};

export default Square;
