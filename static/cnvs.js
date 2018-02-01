function fakeClick(obj)
{  
  var ev = document.createEvent("MouseEvents");  
  ev.initMouseEvent(  
      "click", true, false, window, 0, 0, 0, 0, 0  
      , false, false, false, false, 0, null  
      );  
  obj.dispatchEvent(ev);  
} 

function savaFile(data, filename)
{
    var saveLink = document.createElement('a');
    saveLink.href = data;
    saveLink.download = filename;
    fakeClick(saveLink); 
}

function inputFileButtonChecked()
{
  //�����Ų�����,�һ�������!
  var fileInput = document.getElementById("inputFileId").files[0];
  var reader = new FileReader(); 
  reader.readAsDataURL(fileInput);//���ļ���Data URL��ʽ����ҳ��  

  reader.onload = function()
  { 
    var c = document.getElementById("srcImageCanvas"); 
    var cxt = c.getContext("2d");
    var img = new Image();
    
    img.onload = function()
    {
      cxt.drawImage(img,0,0);
    }
    img.src = reader.result;
    savaFile(reader.result, "aaa.bmp");//��ͼƬ���浽����
  }   
}