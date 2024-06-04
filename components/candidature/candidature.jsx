const Candidature=()=>{
    return(
        <>
       <center><h3>en cours de construction</h3></center> 
        <div class="container mt-5 ">
        <div class="row justify-content-center">
            <div class="col-md-6 border border-white">
                <form id="registrationForm">
                    <div class="form-group">
                        <label for="firstName">
                            Nom
                        </label>
                        <input type="text" 
                               class="form-control"
                               id="firstName" 
                               placeholder="Nom" required/>
                    </div>
                    <div class="form-group">
                        <label for="firstName">
                            Prénom
                        </label>
                        <input type="text" 
                               class="form-control"
                               id="firstName" 
                               placeholder="Prénom" required/>
                    </div>
                    
                    <button onclick="validateForm(event)" 
                            class="btn btn-primary">
                        Envoyer
                    </button>
                </form>
            </div>
            </div></div>
         </>
    )
}

export default Candidature;