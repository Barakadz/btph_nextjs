

const Contactinformation=()=>{
   
    return(
        <div>
          
            <main class="main-content">
            <div class="contact-area pt-140">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-img-wrap">
                                <div class="contact-img">
                                    <img src="1-1-510x587.jpg" alt="Contact Image"/>
                                </div>
                                <div class="contact-pattern">
                                    <img src="pattern.jpg" alt="btph"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ps-lg-10 pt-10 pt-lg-0">
                            <div class="contact-content">
                                <span class="sub-title mb-2">Vous avez un projet ? Commençons</span>
                                <h2 class="title mb-3">Contact avec nous</h2>
                                <p class="short-desc mb-0">Nous nous engageons à la qualité supérieure, à la sécurité inébranlable, à la durabilité environnementale, à l'intégrité éthique, à l'innovation constante et à l'engagement communautaire.</p>
                                <div class="contact-info pt-5">
                                    <h3 class="title mb-0">Addresse</h3>
                                    <p class="short-desc with-border mb-0"><i class="fas fa-map-marker-alt"></i> B.P. 11 M. Zone Industrielle Sidi-Bel-Abbes 22000, Algérie</p>
                                </div>
                                <div class="contact-info pt-4">
                                    <h3 class="title mb-0">information de contact</h3>
                                    <ul>
                                        <li>
                                        <i class="fas fa-phone"></i>   Téléphone:
                                            <a href="tel://048706604">(+213) 048 70 66 04 / 048 70 66 07 /048 70 66 09 / 048 70 66 10</a>
                                        </li>
                                        <li>
                                        <i class="fas fa-fax"></i>  Fax:
                                            <a href="tel://048 70 66 06">(+213) 048 70 66 06</a>
                                        </li>
                                        <li>
                                        <i class="fas fa-envelope"></i>   Mail:
                                            <a class="text-lowercase" href="mailto://info@example.com">info@btph-hasnaoui.com</a>
                                        </li>
                                        <li>
                                            Web:
                                            <a class="text-lowercase" href="mailto://www.example.com">www.btph-hasnaoui.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-form-area pt-130 pb-115">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="contact-form-title mb-3">Laisser un message</h2>
                            <p class="contact-form-desc mb-0">Nous sommes prêts à vous aider à tout moment.</p>
                            <form id="contact-form" class="contact-form pt-10" action="https://whizthemes.com/mail-php/mamunur/oxybuild/oxybuild.php">
                                <div class="group-input">
                                    <input type="text" name="con_name" id="con_name" placeholder="Votre Nom*" class="input-field me-6"/>
                                    <input type="text" name="con_email" id="con_email" placeholder="Votre Mail*" class="input-field mt-6 mt-sm-0"/>
                                </div>
                                <div class="form-field mt-6">
                                    <textarea name="con_message" id="con_message" placeholder="Message*" class="textarea-field"></textarea>
                                </div>
                                <div class="button-wrap mt-8">
                                    <button type="submit" value="submit" class="btn btn-custom btn-secondary btn-primary-hover" name="submit">Envoyer</button>
                                    <p class="form-messege mt-5 mb-0"></p>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 ps-lg-10">
                            <div class="map-with-pattern pt-9">
                                <iframe class="map-size" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13041.241466266325!2d-0.6045725233398369!3d35.19873738321559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7fab2a6879213b%3A0xff47b273fa59ef39!2sBTPH%20HASNAOUI!5e0!3m2!1sfr!2sdz!4v1708616052515!5m2!1sfr!2sdz" width="80%" height="auto" style={{Border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                 <div class="contact-pattern">
                                    <img src="pattern.jpg" alt="btph"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        </div>
    )
    
    
    }
    
    export default Contactinformation;