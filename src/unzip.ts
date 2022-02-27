import * as compressing from "compressing";
import path from 'path';
import fs from 'fs';

function unzip(filepath: string, destdir: string){
    compressing.zip.uncompress(filepath, destdir)
    .then(()=>{
        return 0;
    })
    .catch((e) => {
        return e;
    })
}

function getFileList(dirPath:string):string[] {
    
    let dirList: string[] = new Array();

    dirList = fs.readdirSync(dirPath, {
        withFileTypes: true, 
    }).filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);

    return dirList;

}

const zipname: string = "package.zip";
const zipdir: string = "zip";
const tarname: string = "packages";

const main = () => {
    // // カレントdir nameを返す
    // console.log(__dirname);
    // // 1階層上のdir nameを返す
    // console.log(path.dirname(__dirname));
    const rootpath = path.dirname(__dirname);
    const abpath = path.join(rootpath, zipdir, zipname);
    console.log(abpath);
    if(fs.existsSync(abpath)){
        console.log(`${abpath} ファイルは存在する。`);
    }else{
        console.log(`!!! ${abpath} ファイルは存在しない。`);
        return 0;
    }

    const destpath = path.join(rootpath, zipdir, tarname);
    
    // todo: unzipは非同期っぽいので、zip解凍後に次のstepへ
    unzip(abpath, destpath);

    // for(var fname in getFileList(destpath)){
    //     console.log(fname);
    // }
    // ファイルプロパティを表示してファイルを削除
    console.log(`-----${abpath} の中身-----`);
    getFileList(destpath).forEach(fname => {
        console.log(fname);
        fs.unlinkSync(path.join(destpath, fname));
    });
    console.log(`----------`);
    // 後始末。ディレクトリの削除
    fs.rmdir(destpath, (err) => {
        if(err) throw err;

        console.log('ディレクトリを削除。');
    });
}

main();