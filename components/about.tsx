'use client'

import Link from "next/link"

export default function About() {
    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold text-center mt-2">About GoldnTable</h1>
            <h3 className="text-xl text-center mt-1 font-medium">Raising the standard of service, one team at a time</h3>

            <div className="max-w-3xl mx-auto mt-4 p-4 text-center">
                <p className="mb-4 text-lg">
                    At GoldnTable, we believe that hospitality is more than serving food and drinks, it&apos;s about creating memorable experiences.
                    Our mission is simple: make professional training accessible, flexible, and effective for every member of the restaurant community.
                </p>
                <p className="mb-4 text-lg">
                    Built by industry professionals, our programs focus on the skills that matter most: guest service, food and beverage knowledge,
                    safety, and leadership. Whether you&apos;re just starting your career or managing a growing team, GoldnTable gives you the tools to succed
                    and the confidence to deliver
                </p>
                <p className="mb-4 text-lg">
                    We&apos;re dedicated to supporting restaurants, bars, and cafes by investing in the people who make them thrive.
                    Because when teams grow, so do careers, and every guest leaves with a smile.
                 </p>
            </div>
            <Link href='/' className="text-xl font-bold underline">
                Join us in shaping the future of hospitality training.
            </Link>
        </div>
    )
}