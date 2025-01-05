import  css  from './Options.module.css'

export default function Options() {
    return <ul className={css.options_list}>
        <button>Good
        </button><button>Neutral
        </button><button>Bad
        </button>
    </ul>
}