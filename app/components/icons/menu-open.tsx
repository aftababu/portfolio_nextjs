
const MenuOpen=({setToggle}:{ setToggle: (toggle: boolean) => void; }): JSX.Element => {
    return (
        <button onClick={() => setToggle(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M3.497 15.602a.7.7 0 1 1 0 1.398H.7a.7.7 0 1 1 0-1.398h2.797Zm15.803 0a.7.7 0 1 1 0 1.398H5.529a.7.7 0 1 1 0-1.398H19.3ZM3.497 9.334a.7.7 0 1 1 0 1.399H.7a.7.7 0 1 1 0-1.399h2.797Zm15.803 0a.7.7 0 1 1 0 1.399H5.528a.7.7 0 1 1 0-1.399H19.3ZM3.497 3a.7.7 0 1 1 0 1.398H.7A.7.7 0 1 1 .7 3h2.797ZM19.3 3a.7.7 0 1 1 0 1.398H5.528a.7.7 0 1 1 0-1.398H19.3Z"
          />
        </svg>
      </button>
    )
}

export default MenuOpen
