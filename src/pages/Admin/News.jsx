import React, {useState} from "react";
import './News.css'
import ButtonComponent from "@Components/ButtonComponent/ButtonComponent";
import photo from '@Assets/images/icons/photo.png'
import exit from '@Assets/images/icons/exit.svg'

const News = () => {
    const [image, setImage] = useState(null)
    const [imageName, setImageName] = useState(null)
    const [areaText, setAreaText] = useState('')

    const [showErrors, setShowErrors] = useState(false)

    function loadFile(e) {
        setShowErrors(false)
        setImage(URL.createObjectURL(e.target.files[0]))
        setImageName(e.target.files[0].name)
    }

    function submitHandler() {
        setShowErrors(true)

    }

    return (
        <div className={'news-container'}>
            <form>
                <div className={'title-auth'}>
                    Добавить новость
                </div>
                <div className={'title-description'}>
                    Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)
                </div>

                <div className={'area-container'}>
                    <textarea className={'textarea'}
                              rows={3}
                              placeholder={'Введите текст новости'}
                              onChange={(e) => {
                                  setAreaText(e.target.value)
                              }}
                    />
                    <label className={'textarea-label'}>
                        Символов: {<label
                        className={areaText.length > 150 ? 'text-area-error' : ''}>{areaText.length}</label>}/150
                    </label>
                </div>


                <div className={'image-uploading-container'}>
                    <label className="custom-file-upload">
                        <img className={'label-photo'} src={photo} alt={''}/>
                        <input className={'file-input'}
                               type="file"
                               accept={"image/jpeg, image/png"}
                               name={"image"} onChange={loadFile}/>
                        + Добавить изображение
                    </label>
                    {
                        image && imageName
                            ?
                            <div className={'output-container'}>
                                <img className={'output-image'} src={image} alt={''}/>
                                <label className={'output-label'}>{imageName}</label>
                                <img className={'label-photo'}
                                     style={{cursor: "pointer"}}
                                     src={exit}
                                     alt={'Х'} onClick={() => {
                                    setImageName(null)
                                    setImage(null)
                                }}
                                />
                            </div>
                            :
                            showErrors
                            &&
                            <div className={'output-container'}>
                                <label className={'text-area-error output-label'}>Неверный формат изображения</label>
                            </div>

                    }
                </div>

                {
                    showErrors && areaText.length > 150
                    &&
                    <div style={{marginTop: "40px"}}>
                        <label className={'text-area-error'}>Неверный формат изображения</label>
                    </div>

                }

                <ButtonComponent style={{marginTop: "40px"}} outline={false} onClick={submitHandler}>
                    Применить
                </ButtonComponent>
            </form>


        </div>
    );
};

export default News