import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import '../assets/styles/components/PortfolioItem.css'
import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import androidFill from '@iconify/icons-akar-icons/android-fill';

import bxCodeBlock from '@iconify/icons-bx/bx-code-block';
const PortfolioItem = (props: any) => {
  const {image,title, stack, links} = props
  console.log(image);
  
  const style = {
    "backgroundImage": `url(${image})`,
    "backgrounfSize": "cover",
    "height": "300px",
    "width": "100%",
    "borderRadius":"10px",
    
    
  }

  
  return (
    <div style={style} className="portfolio-card">
      <div className='portfolio-item-content'>
      <h4>{title}</h4>
        <div className='portfolio-content-hide'>
          <div className='row  w-100'>
            <div className='col-md-7'>
              {
                stack &&
                (
                  stack.map((item:any,key:any) => (
                    <Chip key={key} label={item} color='secondary' className='m-1'/>
                  ))
                )
              }

            </div>
            <div className='col-md-5 d-flex justify-content-end'>
              {
                links && (
                  links.map((link: any, key: any) => (
                    <Avatar key={key} className='ml-2'>
                      <a href={link.url} target='_blank' rel='noreferrer'>
                        {link.type==='iOS' ? <Icon icon={appleFilled} style={{color: '#ffffff', fontSize: '42px'}} /> 
                          : link.type==='android' ? <Icon icon={androidFill} style={{color: '#ffffff', fontSize: '35px'}} /> : 
                          link.type==='ux/ui' ? <b style={{'color':'white'}}>UX/UI</b> : 
                          <Icon icon={bxCodeBlock} style={{color: '#ffffff', fontSize: '42px'}} />
                        }
                      </a>
                    </Avatar>
                  ))
                )
              }

            </div>
            

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PortfolioItem;