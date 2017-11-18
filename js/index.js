var isplay = true;
//��ȡҳ���в�����Ƶ��Դ�Ĳ���������
var player = document.getElementById('player');
//����Ԫ�ص�id���Ի�ȡԪ�ض���,���Ұ�һ������¼�
document.getElementById('musicBox').addEventListener('click', function() {
	//�жϵ�ǰ�����Ƿ����ڲ���(ִ�п��ز���)
	if(isplay) {
		isplay = false; 
		player.pause(); 
		this.title = "�������";
		this.className = 'music-box'; 
	} else {
		isplay = true; 
		player.play(); //��ʼ
		this.title = "�������";
		this.className = 'music-box play';
	}
});

var imgs = document.querySelectorAll('.photo-box>img');

for(var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener('click', function() {
		bigImg(this.src);
	});
}
//��ģ̬��������ʾ�����ͼƬ��ԭͼ
function bigImg(imgpath){
	//��ȡ������ĵ�Ԫ�ؿ�������ĸ߶�
	var h = document.documentElement.clientHeight;
	//��ȡ����������������body����λ�ã������Դ���
	var tp = document.body.scrollTop || document.documentElement.scrollTop;
	//1.����һ��ģ̬���ڸ�������body
	var dialog = document.createElement('div');
	//���ô���ĸ߶�
	dialog.style.height=h+'px';
	//Ϊ��������class����
	dialog.className='modal';
	//���ô�����ʾλ��
	dialog.style.top=tp+'px';
	//��������뵽body��
	document.body.appendChild(dialog);
	//����body�Ĺ�����
	document.body.style.overflow='hidden';
	
	//2.����ͼƬ·������һ��ImageͼƬ������ģ̬����
	//����ͼƬ����
	var img = document.createElement('img');
	//����ͼƬ��·��
	img.src=imgpath;
	img.className='img-item';
	//��ȡԭͼ�ĸ߿�
	var imgW = img.width;
	var imgH = img.height;
	img.style.marginTop=-(imgH/2)+'px';
	img.style.marginLeft=-(imgW/2)+'px';
	//��ͼƬ���뵽������
	dialog.appendChild(img);
	
	//Ϊdialog���õ���¼�
	dialog.addEventListener('click',function(){
		//��body�е����ֲ��Ƴ�
		document.body.removeChild(dialog);
	});
	//ΪͼƬ���õ���¼�
	img.addEventListener('click',function(e){
		//��ֹ�¼�ð��
		if(e && e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	})
}
 windows.addEventListener('resize,'function(){
 	var height =document.documentElement.clientHeight;
 	var dialog = document.querySelector('.modal');
 	dialog.style.height=height+'px';
 })
 