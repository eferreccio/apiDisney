const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
//const { Op } = require("sequelize");
const Op = db.Sequelize.Op;
const moment = require('moment');

const charactersController = {
    list: (req, res) => {
        db.Character.findAll()
       .then(characters => {
           let listCharacters = [];
           characters.map((character)=> {
               listCharacters.push({image: character.image , name: character.name})
           })
           let response = {
            meta: {
                status : 200,
                total: characters.length,
                url: '/characters'
            },
            data: listCharacters  
            }
            res.json(response);
        })
    },
    detail: (req, res) => {
        db.Character.findByPk(req.params.id, {include: {association: "Movie"} })
        
            .then(character=>{
                let response = {
                    meta: {
                        status: 200,
                        url: '/characters/:id'
                    },
                    data: character
                }
                res.json(response);
            })      
    },
    create: (req,res) => {
        db.Character
        .create(
            {
                image: req.body.image,
                name: req.body.name,
                age: req.body.age,
                weigth: req.body.weigth,
                history: req.body.history
            }
        )
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'characters/create'
                    },
                    data:confirm
                }
            }else{
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'characters/create'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let characterId = req.params.id;
        db.Character.update(
            {
                image: req.body.image,
                name: req.body.name,
                age: req.body.age,
                weigth: req.body.weigth,
                history: req.body.history
            },
            {
                where: {id: characterId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'characters/update/:id'
                    },
                    data:confirm
                }
            }else{
                response ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'characters/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let characterId = req.params.id;
        db.Character
        .destroy({where: {id: characterId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'characters/delete/:id'
                    },
                    data:confirm
                }
            }else{
                response ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'characters/:id'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    }, 
    search: (req, res) => {
    
        db.Character
            .findAll({
                where: {
                    // busca ya sea por el campo 'name' como por 'age'
                    [Op.or]: [
                      {name: { [Op.like]: '%' + req.query.name + '%' }},
                      {age:  { [Op.like]: '%' + req.query.age + '%' }}
                    ]
                }
            })
            .then(founded => {
                let resp;
                if(founded != ""){
                    resp ={
                        meta: {
                            status: 200,
                            url: 'characters/search'
                        },
                        data:founded
                    }
                }else{
                    resp ={
                        meta: {
                            status: 204,
                            url: 'characters/search'
                        },
                        data:founded
                    }
                }
                res.json(resp);
            })    
            .catch(error => res.send(error))



        
    }    
}


module.exports = charactersController;

