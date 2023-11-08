import { siteConfig } from '@/config/site';
import * as React from 'react';

export interface EmailTemplateProps {
  nombre: string;
  correo:string;
  telefono:string;
  mensaje:string;

}

export const EmailTemplate: React.FC<Readonly<string>> = (name) => (
  <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n      @media only screen and (min-width: 620px) {\n  .u-row {\n    width: 600px !important;\n  }\n  .u-row .u-col {\n    vertical-align: top;\n  }\n\n  .u-row .u-col-100 {\n    width: 600px !important;\n  }\n\n}\n\n@media (max-width: 620px) {\n  .u-row-container {\n    max-width: 100% !important;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .u-row .u-col {\n    min-width: 320px !important;\n    max-width: 100% !important;\n    display: block !important;\n  }\n  .u-row {\n    width: 100% !important;\n  }\n  .u-col {\n    width: 100% !important;\n  }\n  .u-col > div {\n    margin: 0 auto;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n\ntable,\ntr,\ntd {\n  vertical-align: top;\n  border-collapse: collapse;\n}\n\np {\n  margin: 0;\n}\n\n.ie-container table,\n.mso-container table {\n  table-layout: fixed;\n}\n\n* {\n  line-height: inherit;\n}\n\na[x-apple-data-detectors='true'] {\n  color: #475569 !important;\n  text-decoration: none !important;\n}\n\ntable, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_1 .v-container-padding-padding { padding: 30px 10px 20px !important; } #u_content_heading_1 .v-font-size { font-size: 26px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 85% !important; } #u_content_text_1 .v-container-padding-padding { padding: 60px 10px 10px !important; } #u_content_text_2 .v-container-padding-padding { padding: 10px !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 10px 30px !important; } #u_content_social_1 .v-container-padding-padding { padding: 30px 10px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px 10px 30px !important; } }\n    " }} />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css" /><link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500&display=swap" rel="stylesheet" type="text/css" />
        <table id="u_body" className="border-collapse collapse table-auto border-separate border-0 m-0 auto my-0 mx-auto bg-gray-100 w-full min-w-min" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr style={{verticalAlign: 'top'}}>
            <td className="break-words border-collapse !important align-top">
                <div className="u-row-container" style={{padding: '0px', backgroundColor: 'transparent'}}>
                  <div className="u-row" style={{margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent'}}>
                    <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                      <div className="u-col u-col-100" style={{maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top'}}>
                        <div style={{height: '100%', width: '100% !important'}}>
                          <div style={{boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>
                            <table id="u_content_heading_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '60px 10px 20px'}} align="left">
                                    <h1 className="v-font-size font-Trirong"
                                    style={{
                                      margin: '0px',
                                      lineHeight: '130%',
                                      textAlign: 'center',
                                      wordWrap: 'break-word',
                                      fontSize: '32px',
                                      fontWeight: 400
                                    }}
                                      ><strong>{siteConfig.PlantillaCorreo.PrimeraLineaTitulo}</strong><br /><strong>{siteConfig.PlantillaCorreo.SegundaLineaTitulo}</strong></h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_image_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 0px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                      <tbody><tr>
                                          <td style={{paddingRight: '0px', paddingLeft: '0px'}} align="center">
                                            <img src={"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1698798406/image-5_i6jz1s.png"} alt="images/image-5.png" width={319} className="outline-none text-no-underline ms-interpolation-bicubic clear-both inline-block border-none h-auto float-none w-55 max-w-319 align-center"/>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="u-row-container" style={{padding: '0px', backgroundColor: 'transparent'}}>
                  <div className="u-row" style={{margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent'}}>
                    <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                      <div className="u-col u-col-100" style={{maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top'}}>
                        <div style={{backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px'}}>
                          <div style={{boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px'}}>
                            <table id="u_content_text_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '60px 30px 10px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'justify', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><strong>Hola {name}</strong>,</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>&nbsp;</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.InformacionInstitucionPrimeraLinea}</p>
                                      <br />
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.InformacionInstitucionSegundaLinea}</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_text_2" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 10px 30px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><strong>{siteConfig.PlantillaCorreo.Despedida}</strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_text_3" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 60px 30px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>Atentamente,</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>&nbsp;</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><span style={{color: '#418ff2', fontSize: '14px', lineHeight: '19.6px'}}><strong>{siteConfig.PlantillaCorreo.EquipoEncargado}</strong></span></p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.CargoEquipoEncargado}</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
);



export const FooterTemplate = ()=>(
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n      @media only screen and (min-width: 620px) {\n  .u-row {\n    width: 600px !important;\n  }\n  .u-row .u-col {\n    vertical-align: top;\n  }\n\n  .u-row .u-col-100 {\n    width: 600px !important;\n  }\n\n}\n\n@media (max-width: 620px) {\n  .u-row-container {\n    max-width: 100% !important;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .u-row .u-col {\n    min-width: 320px !important;\n    max-width: 100% !important;\n    display: block !important;\n  }\n  .u-row {\n    width: 100% !important;\n  }\n  .u-col {\n    width: 100% !important;\n  }\n  .u-col > div {\n    margin: 0 auto;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n\ntable,\ntr,\ntd {\n  vertical-align: top;\n  border-collapse: collapse;\n}\n\np {\n  margin: 0;\n}\n\n.ie-container table,\n.mso-container table {\n  table-layout: fixed;\n}\n\n* {\n  line-height: inherit;\n}\n\na[x-apple-data-detectors='true'] {\n  color: #475569 !important;\n  text-decoration: none !important;\n}\n\ntable, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_1 .v-container-padding-padding { padding: 30px 10px 20px !important; } #u_content_heading_1 .v-font-size { font-size: 26px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 85% !important; } #u_content_text_1 .v-container-padding-padding { padding: 60px 10px 10px !important; } #u_content_text_2 .v-container-padding-padding { padding: 10px !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 10px 30px !important; } #u_content_social_1 .v-container-padding-padding { padding: 30px 10px 10px !important; } #u_content_text_4 .v-container-padding-padding { padding: 10px 10px 30px !important; } }\n    " }} />
        <table id="u_body" className="border-collapse collapse table-auto border-separate border-0 m-0 auto my-0 mx-auto bg-gray-100 w-full min-w-min" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr style={{verticalAlign: 'top'}}>
            <td className="break-words border-collapse !important align-top">
                <div className="u-row-container" style={{padding: '0px', backgroundColor: 'transparent'}}>
                  <div className="u-row" style={{margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent'}}>
                    <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                      <div className="u-col u-col-100" style={{maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top'}}>
                        <div style={{height: '100%', width: '100% !important'}}>
                          <div style={{boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>
                            <table id="u_content_heading_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '60px 10px 20px'}} align="left">
                                    <h1 className="v-font-size"
                                    style={{
                                      margin: '0px',
                                      lineHeight: '130%',
                                      textAlign: 'center',
                                      wordWrap: 'break-word',
                                      fontSize: '32px',
                                      fontWeight: 400
                                    }}
                                      ><strong>{siteConfig.PlantillaCorreo.PrimeraLineaTitulo}</strong><br /><strong>{siteConfig.PlantillaCorreo.SegundaLineaTitulo}</strong></h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_image_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 0px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                      <tbody><tr>
                                          <td style={{paddingRight: '0px', paddingLeft: '0px'}} align="center">
                                            <img src={"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1698798406/image-5_i6jz1s.png"} alt="images/image-5.png" width={319} className="outline-none text-no-underline ms-interpolation-bicubic clear-both inline-block border-none h-auto float-none w-55 max-w-319 align-center"/>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="u-row-container" style={{padding: '0px', backgroundColor: 'transparent'}}>
                  <div className="u-row" style={{margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent'}}>
                    <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                      <div className="u-col u-col-100" style={{maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top'}}>
                        <div style={{backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px'}}>
                          <div style={{boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px'}}>
                            <table id="u_content_text_1" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '60px 30px 10px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'justify', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><strong>Muchas Gracias por tu Interes</strong>,</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>&nbsp;</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.InformacionInstitucionPrimeraLinea}</p>
                                      <br/>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.InformacionInstitucionSegundaLinea}</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_text_2" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 10px 30px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><strong>{siteConfig.PlantillaCorreo.Despedida}</strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="u_content_text_3" style={{fontFamily: '"Open Sans",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                              <tbody>
                                <tr>
                                  <td className="v-container-padding-padding" style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 60px 30px', fontFamily: '"Open Sans",sans-serif'}} align="left">
                                    <div className="v-font-size" style={{fontSize: '14px', lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>Atentamente,</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>&nbsp;</p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}><span style={{color: '#418ff2', fontSize: '14px', lineHeight: '19.6px'}}><strong>{siteConfig.PlantillaCorreo.EquipoEncargado}</strong></span></p>
                                      <p style={{fontSize: '14px', lineHeight: '140%'}}>{siteConfig.PlantillaCorreo.CargoEquipoEncargado}</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );

