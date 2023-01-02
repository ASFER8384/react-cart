import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';

export default function Header({size}) {
  console.log(size)
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <div className='headerr'>
      <ul>
        <li> <Link to="/">Amazon</Link></li>
        <li> <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={size} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton></Link></li>
      </ul>
    </div>
  )
}
