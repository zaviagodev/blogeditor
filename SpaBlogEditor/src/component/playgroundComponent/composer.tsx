
import {   BlockNoteView,
    useBlockNote,

    } from '@blocknote/react';
    import {
        BlockSchema,
        defaultBlockSchema,
        
      } from "@blocknote/core";
import  {  useContext } from 'react'
import "@blocknote/core/style.css";
import { TypeContext } from '@/provider/typeProvider';
import { cn } from '@/lib/utils';
import FileSelection from './file-selector';
import { TabContextType } from 'typing';
import { useFrappeFileUpload } from 'frappe-react-sdk';




export default function Composer  ({state, page, value , onChange , viewOnly = false, className, noImage = false } : {noImage? : boolean, page : TabContextType, state : string,value : any, onChange? : any, viewOnly? : boolean, className ?: string})  {
    const view = useContext(TypeContext)

    const {upload} = useFrappeFileUpload();

    const uploadFile = async (file : File) => {
        
        try{
          const response = await upload(file,{
            /** If the file access is private then set to TRUE (optional) */
            "isPrivate": false,
            "folder" : "Home/Page Uploads",
        })
          return response.file_url;
        }catch(e){
          return 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
        }
      }

    const customSchema = {
    // Adds all default blocks.
    ...defaultBlockSchema,
    } satisfies BlockSchema;


    const handleChange = (editor : any) => {
      onChange && onChange(editor.topLevelBlocks) ; 
      view.changeBlock(editor.topLevelBlocks) ; 
      sessionStorage.setItem('block',JSON.stringify(editor.topLevelBlocks))
    }
    
    const handleSetting = (editor :any) => {
      sessionStorage.setItem('block',JSON.stringify(editor.topLevelBlocks))
    }


    const editor = useBlockNote({
        initialContent :  value,
        editable: !viewOnly,
        uploadFile : uploadFile,
        blockSchema: customSchema,
        onEditorContentChange: (editor) => handleChange(editor),
        onEditorReady:(editor) => handleSetting(editor), 
    });

    return ( 
      <div className='w-full h-full flex flex-col rounded-xl bg-white '>
        {!noImage && <FileSelection  page = {page} className={`w-full `} mode={state} ></FileSelection>}
        <BlockNoteView className={cn("h-full w-full  rounded-none bg-white",className)} editor={editor} >
        </BlockNoteView>
      </div>
    )
}

