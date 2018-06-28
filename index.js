function optionsWithPropertyExists(options, property) {
  return typeof options !== 'undefined' && options.hasOwnProperty(property)
}

module.exports = function (options) {
  return function({ addComponents }) {
    addComponents({
      'table': {
        borderCollapse: 'collapse',
      },
      'caption': {
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
        color: '#6c757d',
        textAlign: 'left',
        captionSide: 'bottom',
      },
      'th': {
        textAlign: 'inherit',
      },
      '.table': {
        width: '100%',
        maxWidth: '100%',
        marginBottom: '1rem',
        backgroundColor: 'transparent',
        'td,th': {
          padding: optionsWithPropertyExists(options, 'cellPadding') ? options.cellPadding : '.75rem',
          verticalAlign: 'top',
          borderTop: optionsWithPropertyExists(options, 'tableBorderColor')
          ? '1px solid ' + options.tableBorderColor
          : '1px solid #dee2e6',
        },
        'td': {
           borderTop: optionsWithPropertyExists(options, 'tableBodyBorder') && options.tableBodyBorder == false
            ? 0
            : optionsWithPropertyExists(options, 'tableBorderColor')
            ? '1px solid ' + options.tableBorderColor
            : '1px solid #dee2e6',
        },
        'thead th': {
          verticalAlign: 'bottom',
          borderBottom: optionsWithPropertyExists(options, 'tableBorderColor')
          ? '2px solid ' + options.tableBorderColor
          : '2px solid #dee2e6',
        },
        'tbody+tbody': {
          borderTop: optionsWithPropertyExists(options, 'tableBorderColor')
          ? '2px solid ' + options.tableBorderColor
          : '2px solid #dee2e6',
        },
        '.table': {
          backgroundColor: '#fff',
        },
      },
      '.table-sm td,.table-sm th': {
        padding: '.3rem',
      },
      '.table-bordered': {
        border: optionsWithPropertyExists(options, 'tableBorderColor')
          ? '1px solid ' + options.tableBorderColor
          : '1px solid #dee2e6',
        'td,th': {
          border: optionsWithPropertyExists(options, 'tableBorderColor')
          ? '1px solid ' + options.tableBorderColor
          : '1px solid #dee2e6',
        },
        'thead td,thead th': {
          borderBottomWidth: '2px',
        },
      },
      '.table-striped tbody tr:nth-of-type(odd)': {
        backgroundColor: optionsWithPropertyExists(options, 'tableStripedBackgroundColor')
        ? options.tableStripedBackgroundColor
        : 'rgba(0,0,0,.05)',
      },
      '.table-hover tbody tr:hover': {
        backgroundColor: optionsWithPropertyExists(options, 'tableHoverBackgroundColor')
        ? options.tableHoverBackgroundColor
        : 'rgba(0,0,0,.075)',
      },
      '.table-primary,.table-primary>td,.table-primary>th': {
        backgroundColor: '#b8daff',
      },
      '.table-hover .table-primary:hover': {
        backgroundColor: '#9fcdff',
      },
      '.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th': {
        backgroundColor: '#9fcdff',
      },
      '.table-secondary,.table-secondary>td,.table-secondary>th': {
        backgroundColor: '#d6d8db',
      },
      '.table-hover .table-secondary:hover': {
        backgroundColor: '#c8cbcf',
      },
      '.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th': {
        backgroundColor: '#c8cbcf',
      },
      '.table-success,.table-success>td,.table-success>th': {
        backgroundColor: '#c3e6cb',
      },
      '.table-hover .table-success:hover': {
        backgroundColor: '#b1dfbb',
      },
      '.table-hover .table-success:hover>td,.table-hover .table-success:hover>th': {
        backgroundColor: '#b1dfbb',
      },
      '.table-info,.table-info>td,.table-info>th': {
        backgroundColor: '#bee5eb',
      },
      '.table-hover .table-info:hover': {
        backgroundColor: '#abdde5',
      },
      '.table-hover .table-info:hover>td,.table-hover .table-info:hover>th': {
        backgroundColor: '#abdde5',
      },
      '.table-warning,.table-warning>td,.table-warning>th': {
        backgroundColor: '#ffeeba',
      },
      '.table-hover .table-warning:hover': {
        backgroundColor: '#ffe8a1',
      },
      '.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th': {
        backgroundColor: '#ffe8a1',
      },
      '.table-danger,.table-danger>td,.table-danger>th': {
        backgroundColor: '#f5c6cb',
      },
      '.table-hover .table-danger:hover': {
        backgroundColor: '#f1b0b7',
      },
      '.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th': {
        backgroundColor: '#f1b0b7',
      },
      '.table-light,.table-light>td,.table-light>th': {
        backgroundColor: '#fdfdfe',
      },
      '.table-hover .table-light:hover': {
        backgroundColor: '#ececf6',
      },
      '.table-hover .table-light:hover>td,.table-hover .table-light:hover>th': {
        backgroundColor: '#ececf6',
      },
      '.table-dark,.table-dark>td,.table-dark>th': {
        backgroundColor: '#c6c8ca',
      },
      '.table-hover .table-dark:hover': {
        backgroundColor: '#b9bbbe',
      },
      '.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th': {
        backgroundColor: '#b9bbbe',
      },
      '.table-active,.table-active>td,.table-active>th': {
        backgroundColor: 'rgba(0,0,0,.075)',
      },
      '.table-hover .table-active:hover': {
        backgroundColor: 'rgba(0,0,0,.075)',
      },
      '.table-hover .table-active:hover>td,.table-hover .table-active:hover>th': {
        backgroundColor: 'rgba(0,0,0,.075)',
      },
      '.table .thead-dark th': {
        color: '#fff',
        backgroundColor: '#212529',
        borderColor: '#32383e',
      },
      '.table .thead-light th': {
        color: '#495057',
        backgroundColor: '#e9ecef',
        borderColor: optionsWithPropertyExists(options, 'tableBorderColor')
          ? options.tableBorderColor
          : '#dee2e6',
      },
      '.table-dark': {
        color: '#fff',
        backgroundColor: '#212529',
      },
      '.table-dark td,.table-dark th,.table-dark thead th': {
        borderColor: '#32383e',
      },
      '.table-dark.table-bordered': {
        border: '0',
      },
      '.table-dark.table-striped tbody tr:nth-of-type(odd)': {
        backgroundColor: 'rgba(255,255,255,.05)',
      },
      '.table-dark.table-hover tbody tr:hover': {
        backgroundColor: 'rgba(255,255,255,.075)',
      },
      '.table-responsive': {
        display: 'block',
        width: '100%',
        overflowX: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': '-ms-autohiding-scrollbar',
      },
      '.table-responsive>.table-bordered': {
        border: '0',
      },
      '@media (max-width:575.98px)': {
        '.table-responsive-sm': {
          display: 'block',
          width: '100%',
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
        },
        '.table-responsive-sm>.table-bordered': {
          border: '0',
        }
      },
      '@media (max-width:767.98px)': {
        '.table-responsive-md': {
          display: 'block',
          width: '100%',
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
        },
        '.table-responsive-sm>.table-bordered': {
          border: '0',
        }
      },
      '@media (max-width:991.98px)': {
        '.table-responsive-lg': {
          display: 'block',
          width: '100%',
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
        },
        '.table-responsive-sm>.table-bordered': {
          border: '0',
        }
      },
      '@media (max-width:1199.98px)': {
        '.table-responsive-xl': {
          display: 'block',
          width: '100%',
          overflowX: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
        },
        '.table-responsive-sm>.table-bordered': {
          border: '0',
        }
      },
    })
  }
}
