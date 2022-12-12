(function(win, doc) {

    "use strict";

    const IFOOD_INTEGRATION_ID = "integration-with-ifood";
    const IFOOD_BASE_URL = "https://www.youtube.com/embed/hIUHt7ZpVrk"

    const MERCADO_LIVRE_INTEGRATION_ID = "integration-with-ml"
    const MERCADO_LIVRE_BASE_URL = "https://www.youtube.com/embed/ZIVC-J9MOaI"

    const hideIfoodContainer = () => {
        let ifoodIntegrationTag = doc.getElementById(IFOOD_INTEGRATION_ID)
        ifoodIntegrationTag.style.setProperty("display","none")
    }

    const hideMercadoLivreContainer = () => {
        let mlIntegrationTag = doc.getElementById(MERCADO_LIVRE_INTEGRATION_ID)
        mlIntegrationTag.style.setProperty("display","none")
    }

    function loadIfoodPage () {
        let ifoodIframe = `<iframe src=${IFOOD_BASE_URL} frameborder="0" allowfullscreen></iframe>`
        doc.getElementById(IFOOD_INTEGRATION_ID).innerHTML = ifoodIframe;
    }

    function loadMercadoLivrePage () {
        let mlIframe = `<iframe src=${MERCADO_LIVRE_BASE_URL} frameborder="0" allowfullscreen></iframe>`
        doc.getElementById(MERCADO_LIVRE_INTEGRATION_ID).innerHTML = mlIframe;
    }
    
    function hideOrShowByTagname(tag) {
        hideIfoodContainer()
        hideMercadoLivreContainer()
        let htmlItemToHide = doc.getElementById(tag)
        const INTEGRATION_OPTIONS_STYLES = getComputedStyle(htmlItemToHide)
        if(INTEGRATION_OPTIONS_STYLES.display === "block")
            htmlItemToHide.style.setProperty("display","none")
        else
            htmlItemToHide.style.setProperty("display","block")
    }

    function hideOrShowIfoodIntegration(tagOfIfoodContainer, tagOfIntegrationOptionsContainer) {
        hideOrShowByTagname(tagOfIntegrationOptionsContainer)
        hideOrShowByTagname(tagOfIfoodContainer)
        let ifoodTag = doc.getElementById(IFOOD_INTEGRATION_ID)
        const IFOOD_TAG_STYLES = getComputedStyle(ifoodTag)
        if(IFOOD_TAG_STYLES.display === "block") {
            loadIfoodPage()
        }
    }

    function hideOrShowMercadoLivreIntegration(tagOfMercadoLivreContainer, tagOfIntegrationOptionsContainer) {
        hideOrShowByTagname(tagOfIntegrationOptionsContainer)
        hideOrShowByTagname(tagOfMercadoLivreContainer)
        let mlTag = doc.getElementById(MERCADO_LIVRE_INTEGRATION_ID)
        const ML_TAG_STYLES = getComputedStyle(mlTag)
        if(ML_TAG_STYLES.display === "block") {
            loadMercadoLivrePage()
        }
    }

    win.hideOrShowByTagname = hideOrShowByTagname;
    win.hideOrShowIfoodIntegration = hideOrShowIfoodIntegration;
    win.hideOrShowMercadoLivreIntegration = hideOrShowMercadoLivreIntegration;

})(window, document); 