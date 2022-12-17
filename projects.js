let project = document.querySelector('img');
let projList = document.getElementsByClassName('.img')





    function activeProj () {
        function zoomIn() {
            project.style.width = '38rem';
            project.style.height = '24rem';
            project.style.zIndex = '4';
        };
        function zoomOut() {
            project.style.width = '23.5rem';
            project.style.height = '12rem';
           project.style.zIndex = '1';
        }
        
        project.addEventListener('mouseover', zoomIn);
        project.addEventListener('mouseout', zoomOut);
    };
    
    //if (project === projList[0]) {
      //  activeProj();
    //}






