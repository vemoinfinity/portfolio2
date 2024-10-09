/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		animation: {
  			'bounce-top': 'bounce-top 0.9s both',
  			'blur-in-expand': 'blur-in-expand 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  			'scale-up-horizontal-left': 'scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
  			'scale-up-horizontal-right': 'scale-up-hor-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
  			'scale-up-vertical-top': 'scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
  			'scale-up-vertical-bottom': 'scale-up-ver-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
  		},
  		keyframes: {
  			'bounce-top': {
  				'0%': {
  					transform: 'translateY(-45px)',
  					'animation-timing-function': 'ease-in',
  					opacity: '1'
  				},
  				'24%': {
  					opacity: '1'
  				},
  				'40%': {
  					transform: 'translateY(-24px)',
  					'animation-timing-function': 'ease-in'
  				},
  				'65%': {
  					transform: 'translateY(-12px)',
  					'animation-timing-function': 'ease-in'
  				},
  				'82%': {
  					transform: 'translateY(-6px)',
  					'animation-timing-function': 'ease-in'
  				},
  				'93%': {
  					transform: 'translateY(-4px)',
  					'animation-timing-function': 'ease-in'
  				},
  				'25%,55%,75%,87%': {
  					transform: 'translateY(0px)',
  					'animation-timing-function': 'ease-out'
  				},
  				'100%': {
  					transform: 'translateY(0px)',
  					'animation-timing-function': 'ease-out',
  					opacity: '1'
  				}
  			},
  			'blur-in-expand': {
  				'0%': {
  					transform: 'scale(0)',
  					filter: 'blur(12px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					filter: 'blur(0px)',
  					opacity: '1'
  				}
  			},
  			'scale-up-hor-left': {
  				'0%': {
  					transform: 'scaleX(0.4)',
  					'transform-origin': '0% 0%'
  				},
  				'100%': {
  					transform: 'scaleX(1)',
  					'transform-origin': '0% 0%'
  				}
  			},
  			'scale-up-hor-right': {
  				'0%': {
  					transform: 'scaleX(0.4)',
  					'transform-origin': '100% 100%'
  				},
  				'100%': {
  					transform: 'scaleX(1)',
  					'transform-origin': '100% 100%'
  				}
  			},
  			'scale-up-ver-top': {
  				'0%': {
  					transform: 'scaleY(0.4)',
  					'transform-origin': '100% 0%'
  				},
  				'100%': {
  					transform: 'scaleY(1)',
  					'transform-origin': '100% 0%'
  				}
  			},
  			'scale-up-ver-bottom': {
  				'0%': {
  					transform: 'scaleY(0.4)',
  					'transform-origin': '0% 100%'
  				},
  				'100%': {
  					transform: 'scaleY(1)',
  					'transform-origin': '0% 100%'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  variants: {},
  plugins: [require("tailwindcss-animate")],
}

