import {projectFirestore, projectStorage} from '../firebase/config'


export default function HandleDelete({docs}){


    function deleteStorage() {

        projectStorage.ref().listAll()
            .then((snap)=>{
                snap.items.forEach((itemRef)=>{
                    if (   itemRef.name !== "pexels-julia-volk-6118469.jpg"
                        && itemRef.name !== "pexels-julia-volk-6118471.jpg"
                        && itemRef.name !== "pexels-julia-volk-6131269.jpg"
                        && itemRef.name !== "pexels-musa-ortaç-4282919.jpg"
                        && itemRef.name !== "pexels-victor-lavaud-2431436.jpg"
                        && itemRef.name !== "pexels-walid-ahmad-1064766.jpg"
                     ) {
                         itemRef.delete()
                     }
                })
            })
        }
        
    
     function deleteFirestore() {
          docs && docs.map((doc) => {

            //images/4Q3CqVJ4g4QItwSLaZ7j
            //images/G8cqZRPaoGtYLesZkv3Q
            //images/c8jOHKMmTetlsKziQUbS
            //images/canZkeIec7BimGYFXE9i
            //images/jK5PDrGRvhowawlVHnXy
            //images/tU2AAul3xEMNLHu3DmAk
            
            if (   doc.id !== "4Q3CqVJ4g4QItwSLaZ7j" 
                && doc.id !== "G8cqZRPaoGtYLesZkv3Q"
                && doc.id !== "c8jOHKMmTetlsKziQUbS"
                && doc.id !== "canZkeIec7BimGYFXE9i"
                && doc.id !== "jK5PDrGRvhowawlVHnXy" 
                && doc.id !== "tU2AAul3xEMNLHu3DmAk"  ) {
                    projectFirestore
                    .collection('images')
                    .doc(doc.id)
                    .delete()
                } 
        })
    }   
    deleteStorage()
    deleteFirestore()

    return null
}
