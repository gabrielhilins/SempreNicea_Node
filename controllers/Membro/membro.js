const Membro = require('../../models/Membro/membro');
console.log(Membro);

//GetAll
exports.getAllMembro = async (req, res) => {
    try{
        const membro = await Membro.findAll();
        res.status(200).json(membro);
    } catch (error){
        console.error('Erro ao buscar o membro:', error);
        res.status(500).json({message:'Erro ao buscar membro', error: error.message });
    }
};

//get membro por id
exports.getMembroById = async(req,res ) => {
    try{
        const {id} = req.params;
        const membro = await Membro.findByPk(id);
        if(!membro){
            return res.status(404).json({message: 'Membro não encontrado'});
        }
    res.status(200).json(membro);
    } catch(error){
        console.error('Erro ao buscar membro por ID:', error);
        res.status(500).json({message: 'Erro ao buscar membro', error: error.message});
    }
}
//Criar membro
exports.createMembro = async (req, res) => {
    try{
        const {nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil, fotoFundo, comprovante, vinculoUniversitario, formacao } = req.body;
        const membro = await Membro.create(
            { nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil, fotoFundo, comprovante, vinculoUniversitario, formacao }
        );
        res.status(201).json(membro);
    } catch( error) {
    console.error("Error ao criar membro", error);
    res.status(500).json({message: 'Error ao criar membro', error: error.message});
    }
};

//Atualiza membro
exports.updateMembro = async(req, res) => {
    try{
        const{ id } =  req.params;
        const {nomeUsuario, email, senha, bio, contato, localizacao, fotoPerfil, fotoFundo, comprovante, vinculoUniversitario, formacao} = req.body;
        const membro = await Membro.findByPk(id);
        if(!membro){
            return res.status(404).json({message: 'Membro não encontrado'});
        }
        await Membro.update(
            {
                nomeUsuario, email, senha, bio, contato, localizacao, fotoFundo, fotoPerfil, comprovante, vinculoUniversitario, formacao}
        );
        res.status(200).json(membro);
        } catch(error){
        console.error("Error ao atualizar membro", error);
        res.status(500).json({message: 'Error ao atualizar membro', error: error.message});
    }
};

//delete membro
exports.deleteMembro = async (req,res) =>{
    try{
        const{id} = req.params;
        const membro = await Membro.findByPk(id);
        if(membro){
            return res.status(404).json({message: 'Membro não encontrado'});
        }
        await membro.destroy();
        return res.status(200).json({message: 'Membro deletado'});
    } catch(error){
        console.error("Error ao deletar membro", error);
        res.status(500).json({message: 'Error ao deletar membro', error: error.message});
    }
};
