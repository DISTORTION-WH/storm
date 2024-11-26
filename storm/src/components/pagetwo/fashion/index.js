import '../4alst/style.css';
import ScrollToTop from "../up";
import Headd from "../headd";
import { photos, photos1 } from "./photos";
import React, { lazy, Suspense } from 'react'
const ShownGaler = lazy(() => import('../galer/ShownGaler'))
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function Fashion() {
  return (
    <div>

<ScrollToTop />
<Headd/>
      <div className="header">Показы мод</div> <br/><br/><br/>
         <div> 
            <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>
            




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>





              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>



              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>



              <ErrorBoundary fallback={<h2>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>




              <ErrorBoundary fallback={<h2 className='load'>Не удалось загрузить фото, попробуйте перезагрузить страницу. Если проблема повториться, пожалуйста, сообщите в поддержку</h2>}>
                  <Suspense fallback={<div className='load'>Загрузка...</div>}>
                        <div className="roww data-scrol">
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                                      
                                      <div className="el">
                                          <ShownGaler photos = {photos} photos1 = {photos1}/>
                                          <p className="ppodp">Fu-ji 19.13.2023</p>
                                      </div>
                          </div>
                    </Suspense>
              </ErrorBoundary>
           </div>



    </div>
  );
}
export default Fashion;