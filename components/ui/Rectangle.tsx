
function Rectangle( props: { width: number, height: number, color: string } ) {
  const { width, height, color } = props;

  return (
    <div style={{ width, height, border: `1px solid ${color}` }}></div>
  );
}

export default Rectangle;