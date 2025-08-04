import pool from './databaseConnection.js';


async function executeQuery(connection, query){

    let result_query = await connection.query(query); 
    let result = result_query[0]; 
    return result; 
}

async function returnChampionShip() {
    
    const connection = await pool.getConnection(); // Get connection from pool

    const query = connection.query('SELECT id, campeao, vice, ano from Campeonatos')

    const championShip = await executeQuery(connection, query);

    connection.release(); // Release the connection back to the pool

    return championShip; // Return the championship data
}

async function returnChampionShipById(id){

    const connection = await pool.getConnection(); 

    const query = connection.query('SELECT id, campeao, vice, ano from Campeonatos WHERE id ='+id);
    const championShip = await executeQuery(connection, query); 
    connection.release();
    return championShip;
}

async function returnChampionShipByYear(year){

    const connection = await pool.getConnection(); 

    const query = connection.query('SELECT id, campeao, vice, ano from Campeonatos WHERE id = '+ year);
    const championShip = await executeQuery(connection, query); 
    connection.release();
    return championShip;
}

async function returnChampionShipByTeam(team){

    const connection = await pool.getConnection(); 

    const query = connection.query('SELECT id, campeao, vice, ano from Campeonatos WHERE campeao = "'+team+'"');
    const championShip = await executeQuery(connection, query); 
    connection.release();
    return championShip;
}

export  {returnChampionShip, 
         returnChampionShipById, 
         returnChampionShipByYear,
         returnChampionShipByTeam};