import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { API, APIkey, ts, hash } from '../config/config';

function Home({user, isLogin}) {
    const logState = () => {
        console.log('user', user);
        console.log('isLogin', isLogin);
        fetchComics();
    }

    const fetchComics = async () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        }
        try {
            const response = await API.get(`/comic?ts=${ts}&apikey=${APIkey}&hash=${hash}&format=comic&formatType=comic`, config)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchComics();
    }, [])

    return (
        <div>
            Ini adalah halaman home
            <Button onClick={logState}>Log</Button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    user: state.user,
});


export default connect(mapStateToProps)(Home);