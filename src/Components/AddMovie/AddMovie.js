import React, { useState } from "react";  
import Button from "../ui/Button";
import styled from "styled-components";
  
const AddMovie = (props) => {  
  
    const { movies, setMovies } = props;  
  
  
    const [title, setTitle] = useState("");  
    const [date, setDate] = useState("");  
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (e) => {  
        setTitle(e.target.value);   
    };  
  
    const handleDate = (e) => {  
        setDate(e.target.value);   
    };  
    
    const handleLink = (e) => {
        setLink(e.target.value);
    };

    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") } 
        else if (date === "") { alert("date kosong") } 
        else if (genre === "") { alert("genre kosong") } 
        else {
            const movie = {
                id: 4,
                title: title,
                date: date,
                image: link,
                genre: genre
            }
            setMovies([...movies, movie])
            alert("Berhasil Menambahkan Movie Baru")
        }
    }
  
    const genreOpsi = ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Thriller", "Adventure", "Fantasy", "Animation", "Horror", "Mystery", "History", "Crime", "Sport"]; 

  return (  
    <AddMovieStyle>
      <div className='container'>  
      <form className='addmovie'onSubmit={handleSubmit}>  
        <input placeholder="Masukkan Judul" className='addmovie__input' id="title" type="text" value={title} onChange={handleTitle}/> 
        <input placeholder= "Masukkan Link Gambar"className='addmovie__input' id="link" type="text" value={link} onChange={handleLink}/>
        <input className='addmovie__date' id="date" type="date" value={date} onChange={handleDate} /> 
        <select className='addmovie__select' id='genre' value={genre} onChange={handleGenre} placeholder="Masukkan genre">
            <option value="" disabled>Pilih Genre</option>
             {genreOpsi.map((option, index) => (
            <option key={index} value={option}>{option}</option>
             ))}
        </select> 
        <Button variant="primary">Simpan</Button> 
      </form>  
    </div> 
    </AddMovieStyle> 
  );  
};  
  
const AddMovieStyle = styled.div`
    .container {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .addmovie {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 15px;
        border-style: solid;
        background-color: rgb(73, 110, 192);
        border-color: rgb(7, 193, 206);
    }

    .addmovie__title {
        margin-top: 1rem;
        text-align: center;
        font-size: 1.6rem;
        color: white;
    }

    .addmovie__input {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 10px;
        border-style: none;
        padding: 10px;
        margin: 1rem;
        width: 250px;
        height: 40px;
    }

    @media (min-width: 768px) {
        .addmovie {
            margin: 8px;
            max-width: 330px;
            height: auto;
        }
        .addmovie__input {
            width: 260px;
        }
    }
`


export default AddMovie;
