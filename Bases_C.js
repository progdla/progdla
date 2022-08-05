 $("document").ready(function()
                 {
                     $(".Introd,.PartieTheo,.InstallCdBlock,.InstallationCodeB,.typeDonnee,.Variable,.DeclarCont,.Operateurs,.condition,.IntroBoucle,.BoucleFor,.BoucleDoW,.BoucleWhile,.DeclarationStruct,.strurtureC,.AccessDonneeStruct,.lectureEcriture,.UsagePrintfScanf,.CaractereUsuel,.PartiePratiq,.Exercice1,.Exercice2,.Exercice3,.versConclusion,.Conclusion").on('mouseenter',function()
                     {
                       $(this).css("background-color","#ececec");
                     });


                     $(".Introd,.PartieTheo,.InstallCdBlock,.InstallationCodeB,.typeDonnee,.Variable,.DeclarCont,.Operateurs,.condition,.IntroBoucle,.BoucleFor,.BoucleDoW,.BoucleWhile,.DeclarationStruct,.strurtureC,.AccessDonneeStruct,.lectureEcriture,.UsagePrintfScanf,.CaractereUsuel,.PartiePratiq,.Exercice1,.Exercice2,.Exercice3,.versConclusion,.Conclusion").on('mouseleave',function()
                     {
                       $(this).css("background-color","white");
                     });
                    
                     /*Changement de fond de l'endroit selectionné au clic sur les boutons*/
                     $("#Introdu_").on('click',function(){
                        $(".Introd").css("background-color","#ececec");
                     });

                     $("#debutTheo_").on('click',function(){
                        $(".debutTheorie").css("background-color","#ececec");
                     });
                     
                     $("#InstallCodeB_").on('click',function(){
                        $("#InstallCodeB").css("background-color","#ececec");
                     });

                     $("#TypeDonnees_").on('click',function(){
                        $("#TypeDonnees").css("background-color","#ececec");
                     });

                     $("#Variable_").on('click',function(){
                        $("#Variable").css("background-color","#ececec");
                     });

                     $("#Declar_Const_").on('click',function(){
                        $("#Declar_Const").css("background-color","#ececec");
                     });

                     $("#ListOperateurs_").on('click',function(){
                        $("#ListOperateurs").css("background-color","#ececec");
                     });
                     $("#Conditions_C_").on('click',function(){
                        $("#Conditions_C").css("background-color","#ececec");
                     });
                     $("#CondiSimple_").on('click',function(){
                        $(".CondiSimple").css("background-color","#ececec");
                     });

                     $("#CondiAlternative_").on('click',function(){
                        $(".CondiAlternative").css("background-color","#ececec");
                     });
                     $("#Boucles_").on('click',function(){
                        $(".Boucles").css("background-color","#ececec");
                     });
                     $("#Bcle_For_").on('click',function(){
                        $(".Bcle_For").css("background-color","#ececec");
                     });
                     $("#Bcle_DoWhile_").on('click',function(){
                        $(".Bcle_DoWhile").css("background-color","#ececec");
                     });
                     $("#Bcle_While_").on('click',function(){
                        $(".Bcle_While").css("background-color","#ececec");
                     });
                     $("#strurtureCouE_").on('click',function(){
                        $("#strurtureCouE").css("background-color","#ececec");
                     });
                     $("#DeclarationStruct_").on('click',function(){
                        $(".DeclarationStruct").css("background-color","#ececec");
                     });

                     $("#AccessDonneeStruct_").on('click',function(){
                        $(".AccessDonneeStruct").css("background-color","#ececec");
                     });
                     $("#LectureEcritureFonct_").on('click',function(){
                        $(".LectureEcritureFonct").css("background-color","#ececec");
                     });
                     $("#CaractereUsuel_").on('click',function(){
                        $(".CaractereUsuel").css("background-color","#ececec");
                     });
                     $("#PartiePratique_").on('click',function(){
                        $(".PartiePratique").css("background-color","#ececec");
                     });
                     $("#Exercice1_").on('click',function(){
                        $(".Exercice1").css("background-color","#ececec");
                     });             


                     $("#Exercice2_").on('click',function(){
                        $(".Exercice2").css("background-color","#ececec");
                     });
                     $("#Exercice3_").on('click',function(){
                        $(".Exercice3").css("background-color","#ececec");
                     });
                     $("#Conclusion_").on('click',function(){
                        $("#Conclusion").css("background-color","#ececec");
                     });



                     /*Reprise du font lors de la sortie de la sourie*/

                     $("#Introdu_").on('mouseover',function(){
                        $(".Introd").css("background-color","white");
                     });

                     $("#debutTheo_").on('mouseover',function(){
                        $(".debutTheorie").css("background-color","white");
                     });
                     
                     $("#InstallCodeB_").on('mouseover',function(){
                        $("#InstallCodeB").css("background-color","white");
                     });

                     $("#TypeDonnees_").on('mouseover',function(){
                        $("#TypeDonnees").css("background-color","white");
                     });

                     $("#Variable_").on('mouseover',function(){
                        $("#Variable").css("background-color","white");
                     });

                     $("#Declar_Const_").on('mouseover',function(){
                        $("#Declar_Const").css("background-color","white");
                     });

                     $("#ListOperateurs_").on('mouseover',function(){
                        $("#ListOperateurs").css("background-color","white");
                     });
                     $("#Conditions_C_").on('mouseover',function(){
                        $("#Conditions_C").css("background-color","white");
                     });
                     $("#CondiSimple_").on('mouseover',function(){
                        $(".CondiSimple").css("background-color","white");
                     });

                     $("#CondiAlternative_").on('mouseover',function(){
                        $(".CondiAlternative").css("background-color","white");
                     });
                     $("#Boucles_").on('mouseover',function(){
                        $(".Boucles").css("background-color","white");
                     });
                     $("#Bcle_For_").on('mouseleave',function(){
                        $(".Bcle_For").css("background-color","white");
                     });
                     $("#Bcle_DoWhile_").on('mouseover',function(){
                        $(".Bcle_DoWhile").css("background-color","white");
                     });
                     $("#Bcle_While_").on('mouseover',function(){
                        $(".Bcle_While").css("background-color","white");
                     });
                     $("#strurtureCouE_").on('mouseover',function(){
                        $("#strurtureCouE").css("background-color","white");
                     });
                     $("#DeclarationStruct_").on('mouseover',function(){
                        $(".DeclarationStruct").css("background-color","white");
                     });

                     $("#AccessDonneeStruct_").on('mouseover',function(){
                        $(".AccessDonneeStruct").css("background-color","white");
                     });
                     $("#LectureEcritureFonct_").on('mouseover',function(){
                        $(".LectureEcritureFonct").css("background-color","white");
                     });
                     $("#CaractereUsuel_").on('mouseover',function(){
                        $(".CaractereUsuel").css("background-color","white");
                     });
                     $("#PartiePratique_").on('mouseover',function(){
                        $(".PartiePratique").css("background-color","white");
                     });
                     $("#Exercice1_").on('mouseover',function(){
                        $(".Exercice1").css("background-color","white");
                     });             


                     $("#Exercice2_").on('mouseover',function(){
                        $(".Exercice2").css("background-color","white");
                     });
                     $("#Exercice3_").on('mouseover',function(){
                        $(".Exercice3").css("background-color","white");
                     });
                     $("#Conclusion_").on('mouseover',function(){
                        $("#Conclusion").css("background-color","white");
                     });


                     }
                     


                 );